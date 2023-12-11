export default function demoCafe() {
  return (
    <>
      <header>
        headerSection
        <h1>icon</h1>
        <nav>
          <ul>
            <li>menu</li>
            <li>about</li>
            <li>location</li>
          </ul>
        </nav>
      </header>
      <main>
        mainSection
        <section>
          mainVisual
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="#" alt="mainVisualDemoCafe" />
          <h1>COFFEE</h1>
        </section>
        <section>menu</section>
        <section>about</section>
        <section>location</section>
      </main>
      <footer>
        footerSection
        <ul>
          <li>address</li>
          <li>business hours</li>
          <li>contact</li>
          <p className="text-sm text-gray-500">&copy; Satoshi Kageyama</p>
        </ul>
      </footer>
    </>
  );
}
