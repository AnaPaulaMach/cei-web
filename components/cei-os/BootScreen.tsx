export function BootScreen() {
  return (
    <div className="grid min-h-64 place-items-center bg-[#07111f] p-6 text-center font-mono text-cei-terminal">
      <div className="space-y-4">
        <p className="text-3xl font-black">CEI OS</p>
        <div className="h-4 w-64 border-2 border-cei-terminal p-0.5">
          <div className="h-full w-2/3 bg-cei-terminal" />
        </div>
        <p>loading community modules...</p>
      </div>
    </div>
  );
}
