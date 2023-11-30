import React from "react";

const Articolo = ({title,body}) => {
  return (
    <article>
      <article>
        <div style={{position: 'relative', height: 'fit-content'}}>
          <h4>{title}</h4>
          <div className="underline"></div>
          <p>{body}</p>
        </div>
      </article>
    </article>
  );
};

export default Articolo;
