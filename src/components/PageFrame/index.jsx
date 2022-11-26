function PageFrame({children, title}) {
  <Container className="col-lg-6 mt-4">
      <h1 className="mb-0 bg-secondary p-2 shadow text-light">{title}</h1>
      <Container
        className="mb-3 border border-3 border-top-0 px-1 pt-3 border-secondary"
        style={{ textAlign: "left" }}
      >
        {children}
      </Container>
    </Container>
}