const Template = (props) => {
  return (
    <>
      <header>
        {/* desktop nav bar injection */}
        <div className="mobile-navbar-container">
          {/* mobile navbar injection */}
        </div>
      </header>

      <main>
        {/* content injection */}
        {props.children}
      </main>

      {/* footer injection */}
    </>
  );
};

export default Template;
