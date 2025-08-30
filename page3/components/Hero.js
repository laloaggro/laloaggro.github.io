export class Hero extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <section class="hero">
                <div class="hero-content">
                    <h1>Eduardo Aggrovante</h1>
                    <h2>Desarrollador Full Stack</h2>
                    <div class="tech-badges">
                        <span>JavaScript</span>
                        <span>Python</span>
                        <span>React</span>
                        <span>Node.js</span>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="/assets/img/profile.jpg" alt="Eduardo Aggrovante">
                </div>
            </section>
        `;
    }
}

customElements.define('hero-section', Hero);