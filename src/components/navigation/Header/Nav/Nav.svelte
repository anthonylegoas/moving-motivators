<script>
  import { _ } from "svelte-i18n";
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
        {$_('nav.home')}
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        {$_('nav.about')}
      </a>
    </li>
  </ul>
</nav>
