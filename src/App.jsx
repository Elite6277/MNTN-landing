import Nav from "./components/Nav"
import Welcome from "./sections/Welcome"
import Sidepanel from "./components/Sidepanel"
import Start from "./components/Start"
import Blog from "./sections/Blog"
function App() {
  return (
    <main className=" max-container bg-bg bg-[url('/bg.jpg')] bg-no-repeat relative">
      <Nav />
      <Sidepanel />
      <Start />
      <section className="pt-[200px]  px-[80px]  max-sm:px-[20px]">
        <Welcome />
      </section>
      <section className="mt-[843px] ">
        <Blog />
      </section>
    </main>
  )
}

export default App
