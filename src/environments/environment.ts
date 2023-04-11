// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  productoURL: 'http://localhost:8080/producto/',
  pedidoURL: 'http://localhost:8080/pedido/',
  clienteURL: 'http://localhost:8080/cliente/',
  planPostpagoURL: 'http://localhost:8080/planpostpago/',
  tipoClienteURL: 'http://localhost:8080/tipocliente/',
  authURL: 'http://localhost:8080/auth/',
  rolURL: 'http://localhost:8080/auth/roles',
  telefonoURL: 'http://localhost:8080/telefono/',
  ordenURL: 'http://localhost:8080/ordenmigracion/',
  changePasswordURL: 'http://localhost:8080/email-password/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
