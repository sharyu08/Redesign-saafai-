"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  ClipboardPlus,
  Users,
  User,
  ChevronDown,
  ArrowLeft,
  ShieldCheck,
  Check,
  Search,
  X
} from "lucide-react";
import FilterBar from "../../../../components/cleanerAssignments/FilterBar";
import Link from "next/link";

export default function CreateAssignmentsPage() {
  const router = useRouter();
  const [isMultipleMode, setIsMultipleMode] = useState(true);
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [isUsersDropdownOpen, setIsUsersDropdownOpen] = useState(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] = useState(false);
  const [userSearchQuery, setUserSearchQuery] = useState("");
  const [locationSearchQuery, setLocationSearchQuery] = useState("");

  const roles = ["All Roles", "Cleaner", "Supervisor", "Facility Supervisor", "Facility Admin", "Zonal Admin"];

  // Mock users data
  const mockUsers = [
    { id: 1, name: "Orlando Gamble", role: "supervisor", email: "orlando@example.com" },
    { id: 2, name: "MacKenzie Graham", role: "cleaner", email: "mackenzie@example.com" },
    { id: 3, name: "Hamza ali mazari", role: "cleaner", email: "hamza@example.com" },
    { id: 4, name: "Anand Demo Supervisor", role: "supervisor", email: "anand@example.com" },
    { id: 5, name: "Anand Demo User", role: "cleaner", email: "anand.user@example.com" },
    { id: 6, name: "Quynn Pruitt", role: "cleaner", email: "quynn@example.com" },
    { id: 7, name: "Hayfa Morse", role: "cleaner", email: "hayfa@example.com" },
  ];

  // Mock locations data
  const mockLocations = [
    "Rajasthan Villa",
    "Veronica Waterfall",
    "Lokmat Square",
    "Telangkhedi Hanuman Temple",
    "Civil Lines",
    "Sitabuldi",
    "Dharampeth",
  ];

  const filteredUsers = mockUsers.filter(user => {
    const matchesRole = roleFilter === "All Roles" || user.role.toLowerCase() === roleFilter.toLowerCase();
    const matchesSearch = user.name.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(userSearchQuery.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const filteredLocations = mockLocations.filter(location =>
    location.toLowerCase().includes(locationSearchQuery.toLowerCase())
  );

  const handleBack = () => router.back();

  // Close dropdowns when clicking outside
  const usersDropdownRef = useRef(null);
  const locationsDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (usersDropdownRef.current && !usersDropdownRef.current.contains(event.target)) {
        setIsUsersDropdownOpen(false);
      }
      if (locationsDropdownRef.current && !locationsDropdownRef.current.contains(event.target)) {
        setIsLocationsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Reset selections when mode changes
  useEffect(() => {
    if (!isMultipleMode) {
      setSelectedUsers([]);
      setSelectedLocations([]);
    } else {
      setSelectedUser(null);
      setSelectedLocations([]);
    }
    setIsUsersDropdownOpen(false);
    setIsLocationsDropdownOpen(false);
  }, [isMultipleMode]);

  const toggleUserSelection = (user) => {
    if (isMultipleMode) {
      const isSelected = selectedUsers.some(u => u.id === user.id);
      if (isSelected) {
        setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
      } else {
        setSelectedUsers([...selectedUsers, user]);
      }
    } else {
      setSelectedUser(selectedUser?.id === user.id ? null : user);
      setIsUsersDropdownOpen(false);
    }
  };

  const toggleLocationSelection = (location) => {
    if (isMultipleMode) {
      const isSelected = selectedLocations.includes(location);
      if (isSelected) {
        setSelectedLocations(selectedLocations.filter(l => l !== location));
      } else {
        setSelectedLocations([...selectedLocations, location]);
      }
    } else {
      const isSelected = selectedLocations.includes(location);
      setSelectedLocations(isSelected ? [] : [location]);
    }
  };

  const selectAllUsers = () => {
    if (isMultipleMode) {
      const allSelected = filteredUsers.every(user => selectedUsers.some(u => u.id === user.id));
      if (allSelected) {
        setSelectedUsers(selectedUsers.filter(u => !filteredUsers.some(fu => fu.id === u.id)));
      } else {
        const newUsers = filteredUsers.filter(user => !selectedUsers.some(u => u.id === user.id));
        setSelectedUsers([...selectedUsers, ...newUsers]);
      }
    }
  };

  const selectAllLocations = () => {
    if (isMultipleMode) {
      const allSelected = filteredLocations.every(loc => selectedLocations.includes(loc));
      if (allSelected) {
        setSelectedLocations(selectedLocations.filter(loc => !filteredLocations.includes(loc)));
      } else {
        const newLocations = filteredLocations.filter(loc => !selectedLocations.includes(loc));
        setSelectedLocations([...selectedLocations, ...newLocations]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-background w-full py-6 px-4 sm:px-6 md:px-8 flex flex-col items-center relative overflow-hidden">

      {/* Background Decorative Blur (lavender) */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-56 sm:h-56 bg-[#CBF3F0] rounded-full blur-2xl opacity-50 -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 pointer-events-none" />

      {/* Uniform Back Button */}
      <div className="absolute top-8 left-8 z-20">
        <Link href="/dashboard/cleaner-assignments">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-300 transition-colors">
            <ArrowLeft size={20} strokeWidth={2.5} />
          </button>
        </Link>
      </div>

      {/* Main Card - Increased size and spacing */}
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg shadow-slate-200/40 border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000 relative z-10">

        {/* Card Header (lavender) - Increased padding */}
        <div className="bg-[#CBF3F0] px-6 py-4 border-b border-[#CBF3F1] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <ClipboardPlus size={18} className="text-[#FF9F1C]" />
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight text-[#0f0f0f]">
              Create Assignments
            </h1>
          </div>
          <div className="h-2 w-2 rounded-full bg-[#28C76F] animate-pulse" />
        </div>

        <form className="p-8 space-y-8">

          {/* Mode Toggle Box - Increased spacing and font sizes */}
          <div className="bg-white dark:bg-card border border-slate-50 dark:border-border rounded-xl p-4 sm:p-5 flex items-center justify-between transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className={`h-11 w-11 rounded-lg bg-white dark:bg-[hsl(224,48%,14%)] flex items-center justify-center shadow-sm transition-all duration-300 ${isMultipleMode ? "bg-[#FDF9F2] dark:bg-[hsl(224,48%,16%)]" : "bg-blue-50 dark:bg-blue-900/20"
                }`}>
                <ShieldCheck className={`transition-colors duration-300 ${isMultipleMode ? "text-[#FF9F1C]" : "text-blue-600 dark:text-blue-400"
                  }`} size={20} />
              </div>
              <div className="text-left">
                <h3 className={`text-sm font-black uppercase tracking-tight transition-colors duration-300 ${isMultipleMode
                  ? "text-slate-800 dark:text-slate-100"
                  : "text-blue-700 dark:text-blue-300"
                  }`}>
                  {isMultipleMode ? "Multiple Mode" : "Single Mode"}
                </h3>
                <p className={`text-xs font-bold transition-colors duration-300 ${isMultipleMode
                  ? "text-slate-500 dark:text-slate-400"
                  : "text-blue-600 dark:text-blue-400"
                  }`}>
                  {isMultipleMode ? "Bulk mapping active" : "One-to-one mapping active"}
                </p>
              </div>
            </div>

            {/* Enhanced Toggle Switch with Icon */}
            <button
              type="button"
              onClick={() => setIsMultipleMode(!isMultipleMode)}
              className={`relative inline-flex h-9 w-16 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 hover:scale-105 ${isMultipleMode
                ? "bg-[#CBF3F0] dark:bg-[hsl(var(--primary))]/30 focus:ring-[#CBF3F0] shadow-md shadow-[#CBF3F0]/20"
                : "bg-blue-500 dark:bg-blue-600 focus:ring-blue-500 shadow-md shadow-blue-500/20"
                }`}
            >
              {/* Toggle Circle with Icon */}
              <span
                className={`inline-flex items-center justify-center h-7 w-7 transform rounded-full bg-white dark:bg-slate-100 transition-all duration-300 ease-out shadow-lg ${isMultipleMode ? "translate-x-8" : "translate-x-1"
                  }`}
              >
                {/* Multiple Mode Icon */}
                <Users
                  size={14}
                  className={`absolute transition-all duration-300 ${isMultipleMode
                    ? "text-[#FF9F1C] opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 -rotate-90"
                    }`}
                />
                {/* Single Mode Icon */}
                <User
                  size={14}
                  className={`absolute transition-all duration-300 ${!isMultipleMode
                    ? "text-blue-600 dark:text-blue-400 opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-0 rotate-90"
                    }`}
                />
              </span>
            </button>
          </div>

          {/* Filter Bar (lavender theme) */}
          {/* Filter by Role - Increased spacing and font sizes */}
          <div className="text-left space-y-3 bg-[#FDF9F2] p-4 sm:p-5 rounded-xl border border-[#CBF3F0]">
            <p className="text-xs font-black text-[#FF9F1C]/70 uppercase tracking-widest ml-1">
              Filter by Role
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {roles.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setRoleFilter(role)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all border ${roleFilter === role
                    ? "bg-[#CBF3F0] border-[#CBF3F0] text-[#FF9F1C] shadow-md"
                    : "bg-white border-slate-100 text-slate-400 hover:border-[#CBF3F0]"
                    }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Selection Dropdowns - Dynamic based on mode */}
          <div className="space-y-6">
            {/* User Selection */}
            <div className="text-left space-y-2" ref={usersDropdownRef}>
              <label className="text-xs font-black text-[#0f0f0f] dark:text-slate-100 uppercase tracking-widest ml-1">
                {isMultipleMode ? `Select Users (${selectedUsers.length} selected)` : "Select User"}
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsUsersDropdownOpen(!isUsersDropdownOpen)}
                  className="relative cursor-pointer group"
                >
                  <input
                    type="text"
                    readOnly
                    value={isMultipleMode
                      ? selectedUsers.length > 0
                        ? `${selectedUsers.length} user${selectedUsers.length > 1 ? 's' : ''} selected`
                        : "Click to select users..."
                      : selectedUser
                        ? selectedUser.name
                        : "Select a user..."
                    }
                    placeholder={isMultipleMode ? "Click to select users..." : "Select a user..."}
                    className="w-full px-6 py-3.5 text-base rounded-xl border border-slate-100 dark:border-border bg-white dark:bg-card font-medium text-[#0f0f0f] dark:text-slate-100 outline-none focus:border-[#93C5FD] dark:focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[#93C5FD]/20 dark:focus:ring-[hsl(var(--primary))]/20 transition-all cursor-pointer"
                  />
                  <ChevronDown
                    className={`absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-hover:text-[#FF9F1C] dark:group-hover:text-[hsl(var(--primary))] transition-all duration-300 ${isUsersDropdownOpen ? "rotate-180" : ""
                      }`}
                    size={18}
                    strokeWidth={2.5}
                  />
                </div>

                {/* Dropdown Menu */}
                {isUsersDropdownOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white dark:bg-card border border-slate-200 dark:border-border rounded-xl shadow-lg max-h-80 overflow-hidden">
                    {/* Search Bar */}
                    <div className="p-3 border-b border-slate-100 dark:border-border">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                        <input
                          type="text"
                          value={userSearchQuery}
                          onChange={(e) => setUserSearchQuery(e.target.value)}
                          placeholder="Search users..."
                          className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-border bg-slate-50 dark:bg-[hsl(224,48%,12%)] text-slate-700 dark:text-slate-200 outline-none focus:border-[#93C5FD] dark:focus:border-[hsl(var(--primary))]"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>

                    {/* Select All (Multiple Mode Only) */}
                    {isMultipleMode && (
                      <div className="p-2 border-b border-slate-100 dark:border-border">
                        <label className="flex items-center gap-2 px-2 py-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-[hsl(224,48%,14%)] rounded-lg transition-colors">
                          <input
                            type="checkbox"
                            checked={filteredUsers.length > 0 && filteredUsers.every(user => selectedUsers.some(u => u.id === user.id))}
                            onChange={selectAllUsers}
                            className="w-4 h-4 text-[#FF9F1C] dark:text-[hsl(var(--primary))] border-slate-300 rounded focus:ring-[#FF9F1C]"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                            Select All ({filteredUsers.length})
                          </span>
                        </label>
                      </div>
                    )}

                    {/* Users List */}
                    <div className="max-h-60 overflow-y-auto">
                      {filteredUsers.length === 0 ? (
                        <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-400">
                          No users found
                        </div>
                      ) : (
                        filteredUsers.map((user) => {
                          const isSelected = isMultipleMode
                            ? selectedUsers.some(u => u.id === user.id)
                            : selectedUser?.id === user.id;
                          return (
                            <div
                              key={user.id}
                              onClick={() => toggleUserSelection(user)}
                              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${isSelected
                                ? "bg-[#FDF9F2] dark:bg-[hsl(224,48%,16%)]"
                                : "hover:bg-slate-50 dark:hover:bg-[hsl(224,48%,14%)]"
                                }`}
                            >
                              {isMultipleMode ? (
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => { }}
                                  className="w-4 h-4 text-[#FF9F1C] dark:text-[hsl(var(--primary))] border-slate-300 rounded focus:ring-[#FF9F1C]"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              ) : (
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected
                                  ? "border-[#FF9F1C] dark:border-[hsl(var(--primary))] bg-[#FF9F1C] dark:bg-[hsl(var(--primary))]"
                                  : "border-slate-300 dark:border-slate-500"
                                  }`}>
                                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                              )}
                              <div className="flex-1">
                                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{user.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
                              </div>
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${user.role === "supervisor"
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                                }`}>
                                {user.role}
                              </span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Location Selection */}
            <div className="text-left space-y-2" ref={locationsDropdownRef}>
              <label className="text-xs font-black text-[#0f0f0f] dark:text-slate-100 uppercase tracking-widest ml-1">
                {isMultipleMode
                  ? `Select Locations (${selectedLocations.length} selected)`
                  : selectedUser
                    ? `Select Locations (${selectedLocations.length} selected)`
                    : "Select Locations (0 selected)"
                }
              </label>

              {!isMultipleMode && !selectedUser && (
                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
                  <p className="text-sm font-medium text-orange-700 dark:text-orange-300">
                    Please select a user first to see available locations.
                  </p>
                </div>
              )}

              <div className="relative">
                <div
                  onClick={() => {
                    if (!isMultipleMode && !selectedUser) return;
                    setIsLocationsDropdownOpen(!isLocationsDropdownOpen);
                  }}
                  className={`relative cursor-pointer group ${!isMultipleMode && !selectedUser ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                  <input
                    type="text"
                    readOnly
                    value={selectedLocations.length > 0
                      ? `${selectedLocations.length} location${selectedLocations.length > 1 ? 's' : ''} selected`
                      : "Click to select locations..."
                    }
                    placeholder="Click to select locations..."
                    disabled={!isMultipleMode && !selectedUser}
                    className="w-full px-6 py-3.5 text-base rounded-xl border border-slate-100 dark:border-border bg-white dark:bg-card font-medium text-[#0f0f0f] dark:text-slate-100 outline-none focus:border-[#93C5FD] dark:focus:border-[hsl(var(--primary))] focus:ring-2 focus:ring-[#93C5FD]/20 dark:focus:ring-[hsl(var(--primary))]/20 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <ChevronDown
                    className={`absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 group-hover:text-[#FF9F1C] dark:group-hover:text-[hsl(var(--primary))] transition-all duration-300 ${isLocationsDropdownOpen ? "rotate-180" : ""
                      }`}
                    size={18}
                    strokeWidth={2.5}
                  />
                </div>

                {/* Dropdown Menu */}
                {isLocationsDropdownOpen && (isMultipleMode || selectedUser) && (
                  <div className="absolute z-50 w-full mt-2 bg-white dark:bg-card border border-slate-200 dark:border-border rounded-xl shadow-lg max-h-80 overflow-hidden">
                    {/* Search Bar */}
                    <div className="p-3 border-b border-slate-100 dark:border-border">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={16} />
                        <input
                          type="text"
                          value={locationSearchQuery}
                          onChange={(e) => setLocationSearchQuery(e.target.value)}
                          placeholder="Search locations..."
                          className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-slate-200 dark:border-border bg-slate-50 dark:bg-[hsl(224,48%,12%)] text-slate-700 dark:text-slate-200 outline-none focus:border-[#93C5FD] dark:focus:border-[hsl(var(--primary))]"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>

                    {/* Select All (Multiple Mode Only) */}
                    {isMultipleMode && (
                      <div className="p-2 border-b border-slate-100 dark:border-border">
                        <label className="flex items-center gap-2 px-2 py-1.5 cursor-pointer hover:bg-slate-50 dark:hover:bg-[hsl(224,48%,14%)] rounded-lg transition-colors">
                          <input
                            type="checkbox"
                            checked={filteredLocations.length > 0 && filteredLocations.every(loc => selectedLocations.includes(loc))}
                            onChange={selectAllLocations}
                            className="w-4 h-4 text-[#FF9F1C] dark:text-[hsl(var(--primary))] border-slate-300 rounded focus:ring-[#FF9F1C]"
                            onClick={(e) => e.stopPropagation()}
                          />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                            Select All ({filteredLocations.length})
                          </span>
                        </label>
                      </div>
                    )}

                    {/* Locations List */}
                    <div className="max-h-60 overflow-y-auto">
                      {filteredLocations.length === 0 ? (
                        <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-400">
                          No locations found
                        </div>
                      ) : (
                        filteredLocations.map((location, index) => {
                          const isSelected = selectedLocations.includes(location);
                          return (
                            <div
                              key={index}
                              onClick={() => toggleLocationSelection(location)}
                              className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${isSelected
                                ? "bg-[#FDF9F2] dark:bg-[hsl(224,48%,16%)]"
                                : "hover:bg-slate-50 dark:hover:bg-[hsl(224,48%,14%)]"
                                }`}
                            >
                              {isMultipleMode ? (
                                <input
                                  type="checkbox"
                                  checked={isSelected}
                                  onChange={() => { }}
                                  className="w-4 h-4 text-[#FF9F1C] dark:text-[hsl(var(--primary))] border-slate-300 rounded focus:ring-[#FF9F1C]"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              ) : (
                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected
                                  ? "border-[#FF9F1C] dark:border-[hsl(var(--primary))] bg-[#FF9F1C] dark:bg-[hsl(var(--primary))]"
                                  : "border-slate-300 dark:border-slate-500"
                                  }`}>
                                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                              )}
                              <span className="text-sm font-medium text-slate-900 dark:text-slate-100 flex-1">
                                {location}
                              </span>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Button - Dynamic based on mode */}
          <div className="pt-6 border-t border-slate-100 dark:border-border">
            <button
              type="submit"
              className={`w-full py-4 px-6 text-base font-bold text-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 ${isMultipleMode
                ? "bg-gradient-to-r from-[#FF9F1C] to-[#FFBF69] dark:from-[hsl(var(--primary))] dark:to-[hsl(var(--primary-light))] hover:from-[#E68900] hover:to-[#FF9F1C] shadow-[#FF9F1C]/30 dark:shadow-[hsl(var(--primary))]/30"
                : "bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 hover:from-blue-600 hover:to-blue-700 shadow-blue-500/30 dark:shadow-blue-600/30"
                }`}
            >
              <Check
                size={20}
                strokeWidth={3}
                className={`text-white transition-all duration-300 ${isMultipleMode ? "rotate-0" : "rotate-0"
                  }`}
              />
              <span className="transition-all duration-300">
                {isMultipleMode
                  ? `Create ${selectedUsers.length > 0 && selectedLocations.length > 0 ? selectedUsers.length * selectedLocations.length : 0} Assignments`
                  : `Assign ${selectedLocations.length} Location${selectedLocations.length !== 1 ? 's' : ''}`
                }
              </span>
            </button>
          </div>
        </form>
      </div>


    </div>
  );
}
