import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

class AppointmentsRepository {
  private appointments: Appointment[];
  constructor() {
    this.appointments = [];
  }
  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find((appointment) =>
      isEqual(date, appointment.date),
    );
    return findAppointment || null;
  }
  public all():Appointment[] {
    return this.appointments
  }
  public create(provider: String, date: Date): Appointment {
    const appointment = new Appointment(provider, date);
    this.appointments.push(appointment);
    return appointment;
  }
}
export default AppointmentsRepository;
