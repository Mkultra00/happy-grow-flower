import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Petal & Post — A Little Bloom, Just for You",
      },
      {
        name: "description",
        content:
          "A cute cartoon flower grows from a sprout to a full bloom, smiles, and says thank you! Watch it unfold.",
      },
      {
        property: "og:title",
        content: "Petal & Post — A Little Bloom, Just for You",
      },
      {
        property: "og:description",
        content:
          "A cute cartoon flower grows from a sprout to a full bloom, smiles, and says thank you!",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const OUTER_PETALS = Array.from({ length: 12 }, (_, i) => i);
const INNER_PETALS = Array.from({ length: 8 }, (_, i) => i);

function FlowerStage() {
  return (
    <div className="f-sway relative mx-auto h-[300px] w-[240px]">
      {/* Stem */}
      <div className="f-stem absolute bottom-0 left-1/2 h-[170px] w-3 -translate-x-1/2 rounded-full bg-stem" />

      {/* Leaves */}
      <div
        className="absolute bottom-[88px] left-1/2 h-9 w-14 origin-bottom-right"
        style={{ transform: "translateX(-88%) rotate(-34deg)" }}
      >
        <div className="f-leaf f-leaf-a h-full w-full rounded-full bg-leaf" />
      </div>
      <div
        className="absolute bottom-[120px] left-1/2 h-8 w-12 origin-bottom-left"
        style={{ transform: "translateX(-12%) rotate(24deg)" }}
      >
        <div className="f-leaf f-leaf-b h-full w-full rounded-full bg-leaf" />
      </div>

      {/* Flower head */}
      <div className="f-head absolute bottom-[150px] left-1/2 h-[120px] w-[120px] -translate-x-1/2">
        {/* Outer petal ring (12 petals) */}
        {OUTER_PETALS.map((i) => (
          <div
            key={`outer-${i}`}
            className="absolute inset-0"
            style={{ transform: `rotate(${i * 30}deg)` }}
          >
            <div
              className="f-petal absolute inset-0 rounded-full bg-bloom-soft"
              style={
                {
                  "--ty": "-58px",
                  "--ps": "1",
                  animationDelay: `${2.3 + i * 0.05}s`,
                } as React.CSSProperties
              }
            />
          </div>
        ))}

        {/* Inner petal ring (8 petals) */}
        {INNER_PETALS.map((i) => (
          <div
            key={`inner-${i}`}
            className="absolute inset-0"
            style={{ transform: `rotate(${i * 45}deg)` }}
          >
            <div
              className="f-petal absolute inset-0 rounded-full bg-bloom"
              style={
                {
                  "--ty": "-44px",
                  "--ps": "1",
                  animationDelay: `${2.6 + i * 0.09}s`,
                } as React.CSSProperties
              }
            />
          </div>
        ))}

        {/* Inner core ring */}
        <div
          className="f-petal absolute inset-0 rounded-full bg-petal"
          style={
            {
              "--ty": "0px",
              "--ps": "0.78",
              animationDelay: "3s",
            } as React.CSSProperties
          }
        />

        {/* Center */}
        <div className="absolute inset-0 rounded-full bg-core ring-4 ring-petal/25" />

        {/* Face */}
        <div className="f-face absolute inset-0 grid place-items-center">
          <div className="absolute top-6 left-7 size-3 rounded-full bg-cheek/70" />
          <div className="absolute top-6 right-7 size-3 rounded-full bg-cheek/70" />
          <div className="f-eye absolute top-11 left-[52px] h-3.5 w-2 rounded-full bg-ink" />
          <div className="f-eye absolute top-11 right-[52px] h-3.5 w-2 rounded-full bg-ink" />
          <div className="absolute top-[68px] h-4 w-8 rounded-b-full border-b-[3px] border-ink" />
        </div>
      </div>

      {/* Speech bubble */}
      <div className="f-bubble absolute bottom-[262px] left-1/2 -translate-x-1/2">
        <div className="relative rounded-[22px] bg-cloud px-6 py-3 shadow-[0_14px_30px_-14px_rgba(90,80,60,0.5)] ring-1 ring-black/5">
          <span className="font-hand text-3xl leading-none font-bold text-petal">
            thank you!
          </span>
          <span className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 rounded-[4px] bg-cloud" />
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [runId, setRunId] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden f-collage text-ink">
      <div className="pointer-events-none absolute inset-0 f-grain opacity-50" />

      {/* Ambient scenery */}
      <div
        className="f-sun pointer-events-none absolute -top-10 right-10 size-40 rounded-full bg-sun"
        style={{ animation: "floaty 8s ease-in-out infinite" }}
      />
      <div
        className="f-cloud pointer-events-none absolute top-24 left-[12%] h-8 w-24 rounded-full bg-cloud opacity-90"
        style={{ animation: "drift 16s ease-in-out infinite" }}
      />
      <div
        className="f-cloud pointer-events-none absolute top-44 right-[24%] h-6 w-20 rounded-full bg-cloud opacity-70"
        style={{ animation: "drift 20s ease-in-out infinite reverse" }}
      />
      <div
        className="pointer-events-none absolute top-40 left-[26%] size-2 rounded-full bg-sun"
        style={{ animation: "twinkle 3s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute top-24 right-[30%] size-2 rounded-full bg-petal"
        style={{ animation: "twinkle 4s ease-in-out 0.5s infinite" }}
      />
      <div
        className="pointer-events-none absolute top-56 left-[60%] size-1.5 rounded-full bg-cloud"
        style={{ animation: "twinkle 3.5s ease-in-out 1s infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-40 left-[40%] size-2 rounded-full bg-sun"
        style={{ animation: "twinkle 5s ease-in-out 0.3s infinite" }}
      />

      <header className="relative z-10 flex items-center justify-between px-8 pt-7">
        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-ink-soft">
          <span className="grid size-6 place-items-center rounded-full bg-bloom text-xs font-bold text-cta-ink">
            ✿
          </span>
          <span className="font-hand text-2xl leading-none text-ink">
            Petal &amp; Post
          </span>
        </div>
        <span className="text-xs tracking-[0.2em] uppercase text-ink-soft">
          a keepsake that grows
        </span>
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-9rem)] flex-col items-center justify-center px-6 pb-12">
        <div className="f-frost relative max-w-[46ch] rounded-[36px] px-10 pt-8 pb-9 text-center">
          <span className="absolute -top-4 left-8 h-3 w-3 rounded-full bg-cta/30" />
          <span className="absolute -top-4 right-10 h-3 w-3 rounded-full bg-sun/50" />

          <div key={runId}>
            <FlowerStage />
          </div>

          <div className="mt-6">
            <h1 className="text-4xl font-semibold tracking-tight text-balance">
              A little bloom, just for you.
            </h1>
            <p className="mx-auto mt-2 max-w-[34ch] text-sm leading-relaxed text-pretty text-ink-soft">
              A hand-made keepsake card that grows into a smile and says thank
              you. Watch it unfold.
            </p>
            <button
              type="button"
              onClick={() => setRunId((id) => id + 1)}
              className="f-cta mt-6 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-cta-ink transition-[transform,box-shadow] duration-200"
            >
              <span className="text-base leading-none">↻</span>
              <span>Grow it again</span>
            </button>
            <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-ink-soft">
              replay the bloom
            </p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 flex flex-wrap items-center justify-between gap-2 px-8 pb-7 text-xs text-ink-soft">
        <span className="font-hand text-xl leading-none text-ink">
          Petal &amp; Post
        </span>
        <span className="tracking-[0.2em] uppercase">
          a keepsake that grows · made with warmth
        </span>
      </footer>
    </div>
  );
}
