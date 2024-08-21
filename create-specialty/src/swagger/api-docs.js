/**
 * @swagger
 * /apinewspecialty:
 *   post:
 *     summary: Crea una nueva especialidad
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Cardiología
 *               description:
 *                 type: string
 *                 example: Especialidad médica que se ocupa del estudio, diagnóstico y tratamiento de las enfermedades del corazón.
 *     responses:
 *       201:
 *         description: Especialidad creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Specialty successfully created
 *       404:
 *         description: No se pudo crear la especialidad
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Specialty could not be created
 *       500:
 *         description: Error en el servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 err:
 *                   type: string
 *                   example: Error message
 */