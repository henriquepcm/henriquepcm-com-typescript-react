function PageMainContent({ children, containerWrapper, container }) {
     return (
          <main className={containerWrapper}>
               <div className={container}>{children}</div>
          </main>
     );
}

export default PageMainContent;
