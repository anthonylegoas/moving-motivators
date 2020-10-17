<script>
  export let segment;
</script>

<style>
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
    color: var(--grey);
    text-decoration: none;
    padding: 0.25em;
    transition: all ease 0.3s;
  }

  a:hover,
  a[aria-current] {
    color: var(--primary-color);
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        LE JEU
      </a>
    </li>
    <li>
      <a
        aria-current={segment === 'how-to-play' ? 'page' : undefined}
        href="how-to-play">
        À PROPOS
      </a>
    </li>
  </ul>
</nav>
