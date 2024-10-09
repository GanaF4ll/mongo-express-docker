import { CreateTimerDto } from "../dtos/timer.dto";
import { User } from "../models/user.model";
import { Timer, ITimer, ITimerBase } from "../models/timer.model";
import mongoose from "mongoose";

export class TimerService {
  async create(userId: string, dto: CreateTimerDto): Promise<ITimer> {
    const user = await User.findById(userId);

    if (!user) throw new Error(`No user found with this id`);

    const time = dto.startTimestamp - dto.clickTimestamp;

    const timerData: ITimerBase = {
      user_id: new mongoose.Types.ObjectId(userId),
      time: time,
    };

    const newTimer = new Timer(timerData);

    await newTimer.save();
    return newTimer;
  }
}