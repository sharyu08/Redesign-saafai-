// Sample data for export
import { reportData } from './constants.js';

// Filter data based on selected report type
export const getExportData = (selectedReport) => {
    switch (selectedReport) {
        case "Cleaning Report":
            return reportData;
        case "Washroom Report":
            return reportData.filter(item => item.location.includes('Chowk'));
        case "Cleaner Report":
            return reportData.filter(item => ['John Doe', 'Anil Saafai'].includes(item.cleaner));
        case "Washroom Hygiene Trend":
            return reportData.map(item => ({ ...item, trend: item.score > 85 ? 'High' : item.score > 75 ? 'Medium' : 'Low' }));
        case "Detailed Cleaning Report":
            return reportData.map(item => ({ ...item, details: `Detailed analysis for ${item.location}` }));
        default:
            return reportData;
    }
};

// Export to CSV
export const exportToCSV = (selectedReport, data, setIsExporting) => {
    setIsExporting(true);

    try {
        const headers = ['ID', 'Cleaner', 'Zone', 'Location', 'Date', 'Time', 'Status', 'AI Score'];

        // Create CSV content
        const csvContent = [
            headers.join(','),
            ...data.map(row => [
                row.id,
                `"${row.cleaner}"`,
                `"${row.zone}"`,
                `"${row.location}"`,
                row.date,
                row.time,
                `"${row.status}"`,
                row.score
            ].join(','))
        ].join('\n');

        // Create and download file
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `${selectedReport.replace(/\s+/g, '_')}_Report_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show success message
        setTimeout(() => {
            setIsExporting(false);
            alert('Report exported successfully!');
        }, 1000);

    } catch (error) {
        setIsExporting(false);
        alert('Export failed. Please try again.');
        console.error('Export error:', error);
    }
};

// Export to JSON
export const exportToJSON = (selectedReport, data, startDate, endDate, setIsExporting) => {
    setIsExporting(true);

    try {
        const jsonContent = JSON.stringify({
            reportType: selectedReport,
            generatedDate: new Date().toISOString(),
            filters: {
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString()
            },
            data: data
        }, null, 2);

        // Create and download file
        const blob = new Blob([jsonContent], { type: 'application/json' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `${selectedReport.replace(/\s+/g, '_')}_Report_${new Date().toISOString().split('T')[0]}.json`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            setIsExporting(false);
            alert('Report exported successfully!');
        }, 1000);

    } catch (error) {
        setIsExporting(false);
        alert('Export failed. Please try again.');
        console.error('Export error:', error);
    }
};

// Handle export with format selection
export const handleExport = (selectedReport, startDate, endDate, exportToCSV, exportToJSON, setIsExporting) => {
    const data = getExportData(selectedReport);
    const format = window.confirm('Export as CSV? (Click OK for CSV, Cancel for JSON)');

    if (format) {
        exportToCSV(selectedReport, data, setIsExporting);
    } else {
        exportToJSON(selectedReport, data, startDate, endDate, setIsExporting);
    }
};
