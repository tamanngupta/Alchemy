function LessonNode({
  lesson,
  state,
  onClick,
}: {
  lesson: Lesson;
  state: "done" | "current" | "locked";
  onClick: () => void;
}) {
  const isLocked = state === "locked";
  const isCurrent = state === "current";
  const isDone = state === "done";

  // Map the IDs straight to the specific clean paths we set up in vercel.json
  const lessonUrls: Record<number, string> = {
    1: "/lessons/1", // CARBON GETS A DOUBLE DATE -> /lessons/lesson1.html
    2: "/lessons/2", // THE ATTACK -> /lessons/lesson2.html
    3: "/lessons/3", // MORE NUCLEOPHILES -> /lessons/3.html
    4: "/lessons/4", // WHEN ADDITION CHANGES JOB -> /lessons/lesson4_v3.html
    5: "/lessons/5", // THE REDUCTION MANUAL -> /lessons/lesson5.html
    6: "/lessons/6", // SOMEONE HAD TO GO -> /lessons/lesson6.html
    7: "/lessons/7", // THE ENOLATE FILES -> /lessons/lesson6-2.html
  };

  const targetUrl = lessonUrls[lesson.id] || "#";

  return (
    <a
      href={isLocked ? undefined : targetUrl}
      onClick={(e) => {
        if (isLocked) {
          e.preventDefault();
          return;
        }
        // Keeps your Supabase progress-saving function working smoothly!
        onClick();
      }}
      className="group relative z-10 flex flex-col items-center select-none"
      style={{ pointerEvents: isLocked ? "none" : "auto", textDecoration: "none" }}
    >
      {isCurrent && (
        <span className="mb-2 bg-neon px-3 py-1 font-pixel text-[9px] text-deep flicker">
          START
        </span>
      )}

      <div className="relative">
        {/* outer dashed ring for current */}
        {isCurrent && (
          <div
            className="absolute inset-0 -m-3 rounded-full"
            style={{
              border: "2px dashed var(--color-neon)",
              animation: "float-y 3s ease-in-out infinite",
            }}
          />
        )}
        <div
          className={`flex h-24 w-24 items-center justify-center rounded-full font-pixel text-3xl transition-transform ${
            isLocked ? "" : "group-hover:-translate-y-1"
          }`}
          style={{
            background: isDone
              ? "transparent"
              : isCurrent
                ? "color-mix(in oklab, var(--color-neon) 22%, var(--color-deep))"
                : "color-mix(in oklab, var(--color-muted) 60%, var(--color-deep))",
            color: isDone
              ? "var(--color-neon)"
              : isCurrent
                ? "var(--color-neon)"
                : "var(--color-muted-foreground)",
            border: isDone
              ? "4px solid var(--color-neon)"
              : isCurrent
                ? "4px solid var(--color-neon)"
                : "3px solid var(--color-border)",
            boxShadow: isCurrent
              ? "0 0 28px var(--color-neon), inset 0 0 18px color-mix(in oklab, var(--color-neon) 40%, transparent)"
              : isDone
                ? "0 0 18px color-mix(in oklab, var(--color-neon) 60%, transparent)"
                : "none",
            opacity: isLocked ? 0.45 : 1,
          }}
        >
          {isLocked ? lesson.icon : isDone ? "✓" : lesson.icon}
        </div>

        {/* done badge */}
        {isDone && (
          <div
            className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full font-pixel text-[10px]"
            style={{
              background: "var(--color-neon)",
              color: "var(--color-deep)",
              border: "2px solid var(--color-deep)",
            }}
          >
            ✓
          </div>
        )}
      </div>

      <div className="mt-4 max-w-[220px] text-center">
        <div
          className={`font-pixel text-[10px] leading-tight ${
            isCurrent ? "text-neon text-glow" : isDone ? "text-foreground" : "text-muted-foreground"
          }`}
        >
          {lesson.title}
        </div>
        <div className="mt-1 font-pixel text-[8px] text-muted-foreground">
          {isDone ? "100% COMPLETE" : isCurrent ? `MODULE 0${lesson.id}_READY` : `MODULE 0${lesson.id}_LOCKED`}
        </div>
      </div>
    </a>
  );
}