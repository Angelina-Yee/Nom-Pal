class NavBar extends HTMLElement {
  connectedCallback() {
    const path = window.location.pathname;

    const isHome = path.includes("index") || path === "/" || path === "/index.html";
    const isPantry = path.includes('pantry');
    const isRecipes = path.includes('recipes');
    const isAbout = path.includes('about');
    const isContact = path.includes('contact');

    const links = [];

    if(!isHome) links.push('<li><a href="index.html">Home</a></li>');
    if(!isPantry) links.push('<li><a href="pantry.html">Pantry</a></li>');
    if(!isRecipes) links.push('<li><a href="recipes.html">Recipes</a></li>')
    if(!isAbout) links.push('<li><a href="about.html">About</a></li>');
    if(!isContact) links.push('<li><a href="contact.html">Contact Us</a></li>');

    this.innerHTML = `
      <header>
        <a href="index.html" class="logo">
          <img src="assets/name.png" width="110px">
        </a>

        <ul class="navlist">
          ${links.join("")}
        </ul>

        <div class="right-content">
          <a href="signup.html" class="nav-btn">Log in</a>
          <a href="#"><i class="ri-menu-line"></i></a>
        </div>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);