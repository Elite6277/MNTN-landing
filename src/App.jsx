import Nav from "./components/Nav"
import Welcome from "./sections/Welcome"
import Sidepanel from "./components/Sidepanel"
import DropdownMenu from "./components/DropdownMenu"
function App() {
  return (
    <main className="  bg-bg bg-[url('/bg.jpg')]  bg-cover relative">
      {/* <DropdownMenu /> */}
      <Nav />
      <Sidepanel />
      <section className="pt-[200px] px-[80px] pb-[845px]">
        <Welcome />
      </section>
    </main>
  )
}

export default App
