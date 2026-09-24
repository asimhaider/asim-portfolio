import type { Visual } from "../../data/caseStudies";

/**
 * Lightweight, illustrative UI sketches for each case study (pure CSS, no images).
 * They show the *shape* of the product, not real data.
 */
export function CaseVisual({
  type,
  tone = "yellow",
  className = "",
}: {
  type: Visual;
  tone?: "yellow" | "dark";
  className?: string;
}) {
  const panel = tone === "yellow" ? "bg-brand" : "bg-ink bg-grid-dark";
  return (
    <div
      aria-hidden="true"
      className={`relative flex flex-col justify-center overflow-hidden rounded-xl p-5 sm:p-7 ${panel} ${className}`}
    >
      {tone === "yellow" && <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" />}
      <div className="relative">
        {type === "dashboard" && <Dashboard />}
        {type === "funnel" && <Funnel />}
        {type === "exchange" && <Exchange />}
        {type === "workflow" && <WorkflowSketch />}
      </div>
    </div>
  );
}

const Bar = ({ w, className = "bg-neutral-200" }: { w: string; className?: string }) => (
  <div className={`h-2 rounded-full ${className}`} style={{ width: w }} />
);

const frame = "rounded-lg border-2 border-ink bg-white shadow-hard-sm";

function Dashboard() {
  const tiles = [
    { label: "Unreviewed", tone: "bg-amber-400" },
    { label: "High risk", tone: "bg-rose-500" },
    { label: "Approved", tone: "bg-emerald-500" },
  ];
  const rows = [
    { risk: "bg-rose-500", status: "Review", w: "62%" },
    { risk: "bg-amber-400", status: "Pending", w: "48%" },
    { risk: "bg-emerald-500", status: "Approved", w: "70%" },
    { risk: "bg-amber-400", status: "Pending", w: "40%" },
  ];
  return (
    <div className={frame}>
      <div className="flex items-center justify-between rounded-t-md bg-ink px-4 py-2.5">
        <span className="text-[11px] font-bold text-white">AI Tool Inventory</span>
        <span className="rounded bg-brand px-1.5 py-0.5 font-mono text-[9px] font-semibold text-ink">sample</span>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {tiles.map((t) => (
          <div key={t.label} className="rounded-md border border-neutral-200 p-2.5">
            <div className="flex items-center gap-1.5">
              <span className={`h-1.5 w-1.5 rounded-full ${t.tone}`} />
              <span className="text-[10px] font-medium text-neutral-600">{t.label}</span>
            </div>
            <div className="mt-2 h-3 w-8 rounded bg-neutral-200" />
          </div>
        ))}
      </div>
      <div className="space-y-2 px-3 pb-3">
        {rows.map((r, i) => (
          <div key={i} className="flex items-center gap-3 rounded-md border border-neutral-100 px-2.5 py-2">
            <span className={`h-2 w-2 shrink-0 rounded-full ${r.risk}`} />
            <div className="flex-1">
              <Bar w={r.w} />
            </div>
            <span className="rounded bg-brand-soft px-1.5 py-0.5 text-[9px] font-semibold text-ink">{r.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Funnel() {
  const stages = [
    { l: "Acquisition", w: 100 },
    { l: "Activation", w: 78 },
    { l: "Retention", w: 56 },
    { l: "Revenue", w: 44 },
    { l: "Referral", w: 26 },
  ];
  return (
    <div className={`${frame} p-4`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-bold text-ink">AARRR funnel</span>
        <span className="rounded bg-ink px-1.5 py-0.5 font-mono text-[9px] font-semibold text-brand">illustrative</span>
      </div>
      <div className="space-y-2">
        {stages.map((s, i) => (
          <div key={s.l} className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-[10px] font-medium text-neutral-600">{s.l}</span>
            <div className="h-5 flex-1 rounded bg-neutral-100">
              <div className={`h-5 rounded ${i === 0 ? "bg-ink" : "bg-brand"} border border-ink/20`} style={{ width: `${s.w}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <span className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-700">↻ Reorder</span>
        <span className="rounded-md border border-neutral-200 px-2 py-1 text-[10px] font-medium text-neutral-700">☰ Saved list</span>
        <span className="rounded-md bg-ink px-2 py-1 text-[10px] font-semibold text-brand">Checkout</span>
      </div>
    </div>
  );
}

function Book({ tone }: { tone: string }) {
  return (
    <div className={`flex-1 p-3 ${frame}`}>
      <div className={`h-16 rounded ${tone}`} />
      <div className="mt-2.5 space-y-1.5">
        <Bar w="80%" />
        <Bar w="55%" className="bg-neutral-100" />
      </div>
    </div>
  );
}

function Exchange() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Book tone="bg-ink" />
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 border-ink bg-brand text-lg font-bold text-ink">
          ⇄
        </span>
        <Book tone="bg-brand" />
      </div>
      <div className={`mt-4 flex items-center justify-between px-3 py-2.5 ${frame}`}>
        <span className="text-[11px] font-bold text-ink">Exchange request</span>
        <div className="flex items-center gap-1.5 text-[10px]">
          <span className="rounded bg-neutral-100 px-1.5 py-0.5 font-medium text-neutral-600">Pending</span>
          <span className="text-neutral-400">→</span>
          <span className="rounded bg-emerald-100 px-1.5 py-0.5 font-semibold text-emerald-800">Accepted</span>
        </div>
      </div>
    </div>
  );
}

function WorkflowSketch() {
  const steps = ["Request", "Review", "Quote", "Approve", "Produce", "Deliver"];
  return (
    <div className={`${frame} p-4`}>
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-bold text-ink">Custom print order</span>
        <span className="rounded bg-brand px-1.5 py-0.5 text-[9px] font-semibold text-ink">Quote sent</span>
      </div>
      <ol className="grid grid-cols-3 gap-2">
        {steps.map((s, i) => (
          <li
            key={s}
            className={`rounded-md border px-2 py-2 text-center text-[10px] font-semibold ${
              i < 3 ? "border-ink bg-ink text-brand" : "border-neutral-200 text-neutral-500"
            }`}
          >
            <span className="font-mono text-[9px] opacity-60">{i + 1}</span> {s}
          </li>
        ))}
      </ol>
      <div className="mt-3 grid grid-cols-[3rem_1fr] items-center gap-3 rounded-md border border-neutral-100 p-2.5">
        <div className="grid h-12 place-items-center rounded bg-brand font-mono text-[9px] font-bold text-ink">.STL</div>
        <div className="space-y-1.5">
          <Bar w="70%" />
          <Bar w="45%" className="bg-neutral-100" />
        </div>
      </div>
    </div>
  );
}
