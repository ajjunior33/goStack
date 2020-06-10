import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
    const { provider, date } = request.body;

    /* ** Json

        {
            "provider": " Diego Fenandes",
            "date": Timestamp => IS-8601
        }

    */

    const appointment = {
        id: uuid(),
        provider,
        date,
    };

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmentsRouter;
