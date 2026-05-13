import Navbar from "./components/Navbar";
import FirstPage from "./components/FirstPage";
import EllipseBlack from "./components/EllipseBlack";

function App() {
  return (
    <div className="relative w-full bg-black overflow-x-hidden">
      <Navbar />

      <FirstPage />

      <EllipseBlack />

      {/* NEW BLACK SECTION */}
      <section className="relative z-10 w-full bg-black">
        <div className="max-w-[1265px] mx-auto min-h-[1200px]" />
      </section>

      {/* GLOBAL GREEN ELLIPSE */}
      <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
        <div
          className="
            absolute
            left-1/2
            top-[42.9%]
            -translate-x-1/2
            -translate-y-1/2
            w-[70vw]
            aspect-square
            max-w-[1008px]
            rounded-full
            backdrop-blur-[3px]
          "
          style={{
            background:
              "radial-gradient(circle, rgba(34,197,94,0.35) 0%, rgba(34,197,94,0.18) 35%, rgba(0,0,0,0) 72%)",

            border: "1px solid rgba(34,197,94,0.30)",

            boxShadow: "0 0 120px rgba(34,197,94,0.25)",
          }}
        />
      </div>
    </div>
  );
}

export default App;
