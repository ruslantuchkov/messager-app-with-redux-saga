export const runSagas = function(sagaMiddleware, sagas) {
  Object.values(sagas).forEach(saga => sagaMiddleware.run(saga));
}