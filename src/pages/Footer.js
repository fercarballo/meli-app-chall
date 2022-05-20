import React from "react";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 right-0 max-w-full">
      <div className="flex-row bg-white pt-7 pb-5 ">
        <section className="flex flex-row justify-evenly p-5">
          <div className="basis-1/4 text-center">
            <div className="pb-5">
              <img
                className="m-auto"
                src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg"
                alt="elegí como pagar"
              />
            </div>
            <h3>Elegí cómo pagar</h3>
            <p>
              Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin
              tarjeta con Mercado Crédito.
            </p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Cómo pagar tus compras
            </a>
          </div>

          <div className="basis-1/4 text-center">
            <div className="pb-5">
              <img
                className="m-auto"
                src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg"
                alt="elegí como pagar"
              />
            </div>
            <h3>Envío gratis desde $ 4.000</h3>
            <p>
              Solo por estar registrado en Mercado Libre tenés envíos gratis en
              miles de productos. Es un beneficio de Mercado Puntos.
            </p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Conocé más sobre este beneficio
            </a>
          </div>

          <div className="basis-1/4 text-center">
            <div className="pb-5">
              <img
                className="m-auto"
                src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg"
                alt="elegí como pagar"
              />
            </div>
            <h3>Seguridad, de principio a fin</h3>
            <p>
              ¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no
              puedas hacer, porque estás siempre protegido.
            </p>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Cómo te protegemos
            </a>
          </div>
        </section>

        <div className="flex items-center flex-row justify-evenly mx-auto p-7">
          <div className="border-gray-200 border-2 rounded-lg p-7">
            <p>Botón de arrepentimiento</p>
            <a href="." target="_blank" rel="noopener noreferrer">
              Cancelar una compra
            </a>
            <a href="." target="_blank" rel="noopener noreferrer">
              Cancelar una suscripción
            </a>
            <a href="." target="_blank" rel="noopener noreferrer">
              Cancelar un seguro o garantía
            </a>
          </div>
          <div className=" border-gray-200 border-2 rounded-lg p-7">
            <p>Conocé las normas que aplican cuando comprás</p>
            <a href="." target="_blank" rel="noopener noreferrer">
              Ver contratos de adhesión - Ley N.º 24.240 de Defensa del
              Consumidor
            </a>
          </div>
        </div>

        <div className="flex flex-row-reverse min-w-md">
          <img
            className="p-2 max-w-xs"
            src="https://http2.mlstatic.com/resources/frontend/web-homes/ui-dist/images/data-fiscal-6dc7613071.png"
            alt=""
          />

          <img
            className="p-2 max-w-sm"
            src="https://http2.mlstatic.com/resources/sell/banner_usuarios_financieros.svg"
            alt=""
          />
          <img
            className="p-2 max-w-sm "
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/insurance/ssnlogo.svg"
            alt=""
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
