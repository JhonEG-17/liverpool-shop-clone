export default function Footer() {
  return (
    <footer className="block items-center justify-center bg-gray-100 p-4">
      <br className="block w-full h-[1px] text-2xl text-black" />
      <section className="block items-center md:items-center lg:items-start justify-center">
        <article className="flex flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-1.5">Soporte al cliente</h3>
              <ul>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Facturación</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Ayuda</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Mis compras</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Garantía Liverpool</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-1.5">Servicios Liverpool</h3>
              <ul>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Crédito</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Tiempo aire</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Concursos y promociones</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Diseño de interiores</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Ventas Corporativas</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-1.5">Acerca de Liverpool</h3>
              <ul>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Portal de carrera</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>¿Quiénes somos?</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>¿Relación con inversionistas</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Sostenibilidad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-1.5">Promociones</h3>
              <ul>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Venta Nocturna</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Hot Sale</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Buen Fin</a></li>
                <li><a href="#" className="hover:text-pink-600" tabIndex={0}>Bolo Fest</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-1.5">Contacto</h3>
              <ul>
                <li><a href="tel: 5552629999" tabIndex={0}> Ventas por télefono: <b className="text-pink-600">555262-9999</b></a></li>
                <li><a href="tel: *7171" tabIndex={0}>Desde tu celular: <b className="text-pink-600">*7171</b></a></li>
                <li><a href="https://wa.me/525552629999" tabIndex={0}>Contáctanos vía <b className="text-pink-600">WhatsApp</b> o por Teléfono al <b className="text-pink-600">5552629999</b></a></li>
                <li className="flex items-center justify-start gap-5 mt-4">
                  <a href="#" tabIndex={0}><span className="icon-facebook text-4xl text-pink-600"></span></a>
                  <a href="#" tabIndex={0}><span className="icon-instagram text-4xl text-pink-600"></span></a>
                  <a href="#" tabIndex={0}><span className="icon-x text-4xl text-pink-600"></span></a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <br />
            <div className="flex flex-col items-center justify-center">
              <p>Comentarios y Sugerencias:atencion@liverpool.com.mx</p>
              <p><a href="#" className="hover:text-pink-600" tabIndex={0}>Términos y condiciones</a> / <a href="#" className="hover:text-pink-600" tabIndex={0}>Aviso de privacidad</a> / <a href="#" className="hover:text-pink-600" tabIndex={0}>Mapa del sitio</a> / </p>
            </div>
          </div>
        </article>
      </section>
      <section className="block items-center justify-center w-full mt-4">
        <p className="text-center"><small>Precio en rojo aplica el descuento más alto, las promociones pueden diferir de las publicadas en tienda</small></p>
        <p className="text-center"><small>2025 Liverpool / Todos los derechos reservados D.R. ®</small></p>
      </section>
    </footer>
  );
}