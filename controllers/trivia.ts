const pool = require('../config');

const obtenerPreguntaAleatoria = async () => {
    try {
        const preguntaQuery = `
            SELECT pregunta
            FROM trivias
            ORDER BY RANDOM()
            LIMIT 1;
        `;
        const preguntaResult = await pool.query(preguntaQuery);
        const pregunta = preguntaResult.rows[0].pregunta;

        const respuestasQuery = `
            SELECT respuesta
            FROM respuestas
            WHERE id_trivia = (SELECT id_trivia FROM trivias WHERE pregunta = $1);
        `;
        const respuestasResult = await pool.query(respuestasQuery, [pregunta]);
        const respuestas = respuestasResult.rows.map((row: any) => row.respuesta);

        return { pregunta, respuestas };
    } catch (error) {
        console.error('Error al realizar la consulta:', error);
        throw new Error('Error interno del servidor');
    }
};

const mostrarPreguntaYRespuestas = async (req: any, res: any) => {
    try {
        const { pregunta, respuestas } = await obtenerPreguntaAleatoria();

        res.status(200).json({ pregunta, respuestas });
    } catch (error) {
        console.error('Error al obtener la pregunta y respuestas:', error);
        res.status(500).send('Error interno del servidor');
    }
};

module.exports =
{
    mostrarPreguntaYRespuestas
}