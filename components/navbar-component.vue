<template>
  <header class="navbar">
    <div class="navbar__inner">
      <div class="navbar__logo">
        <img src="~assets/img/Logo.svg" />
      </div>
      <input
        type="checkbox"
        id="navbar-toggler"
        class="navbar__toggler-check"
      />
      <nav class="navbar__menu">
        <a href="" class="navbar__link navbar__link-active">ABOUT</a>
        <a href="" class="navbar__link">GALLERY</a>
        <a href="" class="navbar__link">PRICING</a>
        <a href="" class="navbar__link">FAQ</a>
        <a href="" class="navbar__link">BENEFITS</a>
      </nav>
      <div class="test">
        <button href="" class="button btn btn--fill">sign in</button>
        <button href="" class="button btn btn--border">sign up</button>
        <label for="navbar-toggler" class="navbar-toggler">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </div>
  </header>
</template>




<style lang="scss" scoped>
@import "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";

* {
  margin: 0;
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background-color: #fff;
}

.navbar {
  color: #fff;
  margin-top: 50px;

}

.navbar__inner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: 1440px;
}

.navbar-toggler,
.navbar__toggler-check {
  display: none;
  margin-right: 20px;
}

.navbar__menu {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 12px;
  width: 100%;
  z-index: 999999 !important;
}

.navbar__link {
  display: block;
  padding: 0.5rem 1.25rem;
  text-align: center;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s;
}

.navbar__link:hover {
  color: #fff;
}

.navbar__link-active {
  color: #fff;
  pointer-events: none;
}

.navbar__logo {
  margin-top: 7px;
  margin-right: 5px;
}

.button {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  transition: filter 0.15s;
}

.button:hover {
  filter: brightness(0.9);
}
.test {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
}

@media only screen and (max-width: 1024px) {
  .navbar__menu {
    gap: 0.5rem;
  }

  .button {
    padding-inline: 1.5rem;
  }
}

@media only screen and (max-width: 768px) {
  :root {
    font-size: 15px;
  }

  .navbar__menu {
    position: absolute;
    top: -100vh;
    left: 0;
    width: 100%;
    flex-direction: column;
    padding: 0.5rem 4% 1rem;
    background-color: #f2994a;
    border-radius: 3px;
    z-index: -1;
    transition: top 0.5s;
  }

  .navbar-toggler {
    display: block;
    font-size: 1.5rem;
  }

  .navbar__toggler-check:checked + .navbar__menu {
    top: 64px;
  }
}
</style>