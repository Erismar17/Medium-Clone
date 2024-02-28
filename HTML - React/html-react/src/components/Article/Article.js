import './style.css';
import perfil from '../img/perfil.jpg';
import logo from '../img/globant_logo.jpg';
import aplausos from '../img/manos-aplaudiendo.png';
import estrella from '../img/estrella-de-la-lista-de-deseos.png';
import comentarios from '../img/comentarios.png';
import flecha from '../img/angulo-circulo-derecha.png';
import subirArchivo from '../img/subir-archivo.png';
import menu from '../img/menu-puntos.png';
import laptop from '../img/laptop.webp';

const Article = () => {
    return (
        <div class="articulo">
        <article class="article-center">
            <h1 class="title">React & JavaScript Optimization Techniques</h1>
        </article>
    
        <section class="creator">
            <div>
                <img class="perfil" src={perfil} alt="perfil" />
                <img class="globant" src={logo} alt="globant_logo" />
            </div>
            <p>Erismar Mendoza · <span class="follow">Follow</span> <br/>Published in <strong>Globant</strong> · 21 min read · Jan 16, 2024</p>
        </section>
        <hr />

        <div class="iconos">
            <div>
                <img class="manos" src={aplausos} alt="" />368
                <img class="comments" src={comentarios} alt="" />7
            </div>
            <div>
                <img class="fav" src={estrella} alt=""/>
                <img class="play" src={flecha} alt=""/>
                <img class="upload" src={subirArchivo} alt=""/>
                <img class="point" src={menu} alt=""/>
            </div>
        </div>
        <hr />

        <figure class="figure">
            <img class="picture" src={laptop} alt="laptop" />
            <figcaption class="caption">Photo by <span class="picaption">Clément Hélardot</span> on <span class="picaption">Unsplash</span></figcaption>
        </figure>

        <article>
            <p class="description-article">When we begin a project, we tend to focus on things like scalability, usability, availability, security, and others. But, as the application grows, we may observe <br />a decline in its speed and performance. It is often only at this point that we recognize the need for optimization.</p>
            <p class="description-article">In this article, we will present some of the most common techniques for <br />optimizing code, which can be implemented in any application; we will also <br />show optimization techniques using sample code written in <span class="description-article-decoration">JavaScript</span> <br />and <span class="description-article-decoration">React</span>. The following techniques are gonna be covered:</p>
            <ul>
                <li>Debouncing</li>
                <li>Throttling</li>
                <li>Memoization</li>
                <li>Pure Components</li>
                <li>Lazy Loading</li>
                <li>Virtualization (or Windowing)</li>
                <li>Error Boundaries</li>
                <li>Inline Functions</li>
            </ul>
            <p class="description-article">There are many more techniques available, but in this article, we will focus on the ones already mentioned.</p>
            <p class="three-points">.  .  .</p>
        </article>

        <section>
            <h1 class="start-section">Debouncing</h1>
            <p class="description-section">Debouncing is a programming technique used to optimize the processing of functions that consume a lot of execution time. This technique involves preventing those functions from executing repeatedly without control, which helps improve the performance of our applications.</p>
            <p class="description-section">In the case of applications that must respond to certain user actions, we often cannot avoid certain functions from being executed repeatedly. For example, events such as <span class="description-section-decoration">mousemove</span> or <span class="description-section-decoration">window.resize</span> can trigger hundreds of calls to these functions with a simple mouse movement or browser window resizing. It is in these cases that we resort to techniques like Debouncing to limit these calls and solve performance issues that may be caused by such events or functions.</p>
            <p class="description-section">The operation of Debouncing is quite simple. It involves creating a function that acts as an interceptor to limit the call to the callback function we want to optimize. This function will have at least two parameters: <span class="description-section-decoration">time</span> and <span class="description-section-decoration">callback</span>. The <span class="description-section-decoration">time</span> parameter is used to indicate to the Debounce how long the function should wait before being called, and the <span class="description-section-decoration">callback</span> parameter is the function that will be conditioned to this time limit. Once the control mechanism is created, the <span class="description-section-decoration">debounce</span> function returns a new optimized function that will serve in place of the original function.</p>
            <p class="description-section">It is worth noting that in Debouncing, if multiple calls to the callback occur within the defined time window, only the last call will be considered for execution and the previous ones will be discarded. Additionally, while this is happening, the time window will also be renewed each time a call occurs. For example, if we define the time as 2 seconds, the callback defined in the <span class="description-section-decoration">debounce</span> function will only be executed after 2 seconds. If multiple calls occur within the time window, the time will be renewed for the same period, and only the last function that entered the <span class="description-section-decoration">debounce</span> function will be executed once the defined time is met.</p>
            <p class="description-section">Here is a simple example of how to implement Debouncing in code using JavaScript:</p>
            
            <div class="code-explaining">
                <p><span class="code-explaining-comment">// Example 1</span><br /><br /><span class="code-explaining-purple-lines">const</span> debounce = (<span class="code-explaining-purple-lines">callback, time</span> = <span class="code-explaining-blue-lines">300</span><br /><span class="spaces-one"></span><span class="code-explaining-purple-lines">let</span> timer;<br /><span class="code-explaining-purple-lines"><br /><span class="spaces-one"></span>return ()</span><br /><span class="code-explaining-purple-lines"><span class="spaces-two"></span>clearTimeout</span>(timer);<br /><span class="spaces-two"></span>timer = <span class="code-explaining-purple-lines">setTimeout</span>(callback, time);<br /><span class="spaces-one"></span>;<br />;</p>
            </div>
        </section>
    </div>
    )
};

export default Article;