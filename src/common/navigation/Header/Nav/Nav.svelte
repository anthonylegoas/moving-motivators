<style>
  nav {
    width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  ul > li + li {
    margin-left: 0.5em;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
    border: 1px solid var(--primary-color);
    border-radius: 3px;
    color: var(--primary-color);
  }

  li.accent {
    background-color: var(--primary-color);
    color: white;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li class="accent">
      <a href="how-to-play">Comment jouer ?</a>
    </li>
    <li>
      <a href="https://management30.com/" target="_blank">
        Qu'est-ce que le management 3.0 ?
      </a>
    </li>
  </ul>
</nav>
