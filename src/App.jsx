import "./App.scss";

function App() {

  return (
    <>
      <div className="container">
        <section className="estrutura">
          <article className="box">
            <h1>Nossa Estrutura</h1>
            <img src="http://lorempixel.com.br/350/200/?1" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="">
              Veja Mais
            </a>
          </article>

          <article className="box">
            <h1>Nossa Estrutura</h1>
            <img src="http://lorempixel.com.br/350/200/?2" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <a href="">
              Veja Mais
            </a>
          </article>
        </section>        
      </div>
    </>
  )
}

export default App
