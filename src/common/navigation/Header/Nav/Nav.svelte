<script>
  export let segment;
</script>

<style>
  nav {
    width: 100%;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul > li + li {
    margin-left: 0.5em;
  }

  a {
    display: block;
    float: left;
    border: 1px solid var(--primary-color);
    border-radius: 3px;
    color: var(--primary-color);
    text-decoration: none;
    padding: 1em 1.25em;
    transition: all ease 0.3s;
  }

  a:hover,
  a[aria-current] {
    background-color: var(--primary-color);
    color: white;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Jouer
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'how-to-play' ? 'page' : undefined}
        href="how-to-play">
        Comment jouer ?
      </a>
    </li>
  </ul>
</nav>
