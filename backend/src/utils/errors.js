export class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

export function notFound(req, res, next) {
  next(new AppError(`Rota não encontrada: ${req.originalUrl}`, 404));
}

export function errorHandler(err, req, res, next) {
  const statusCode = err.statusCode || 500;

  if (err.name === "ValidationError") {
    return res.status(422).json({
      success: false,
      message: "Erro de validação",
      errors: Object.values(err.errors).map((item) => item.message)
    });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ success: false, message: "ID inválido" });
  }

  res.status(statusCode).json({
    success: false,
    message: err.message || "Erro interno do servidor"
  });
}
