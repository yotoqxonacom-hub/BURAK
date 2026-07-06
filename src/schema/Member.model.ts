import mongoose, { Schema } from "mongoose";
import { Member } from "../libs/types/member";
import { MemberType, MemberStatus } from "../libs/enums/member.enum";

const memberSchema = new Schema<Member>(
  {
    memberType: {
      type: String,
      enum: Object.values(MemberType),
      default: MemberType.USER,
    },

    memberStatus: {
      type: String,
      enum: Object.values(MemberStatus),
      default: MemberStatus.ACTIVE,
    },

    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPassword: {
      type: String,
      select: false,
      required: true,
    },

    memberAddress: String,
    memberDesc: String,
    memberImage: String,

    memberPoints: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Member>("Member", memberSchema);
