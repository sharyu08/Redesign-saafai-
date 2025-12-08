import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Safai Dashboard</h1>
      <p>
        Go to{" "}
        <Link href="/dashboard" style={{ color: "blue" }}>
          Dashboard
        </Link>
      </p>
    </main>
  );
}
