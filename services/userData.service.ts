"use strict";
import { ServiceSchema } from "moleculer";
import DbService from "moleculer-db";
import MongooseAdapter from "moleculer-db-adapter-mongoose";
import mongoose from "mongoose";
const UserDataService: ServiceSchema = {
    adapter: new MongooseAdapter("mongodb://localhost/moleculer-demo"),
    mixins: [DbService],
    model: mongoose.model("userData", new mongoose.Schema({
        // Поля ЕСК
        sAMAaccountName: { type: String },
        mail: { type: String },
        givenName: { type: String },
        sn: { type: String },
        middleName: { type: String },
        telephoneNumber: { type: String },
        employeeType: { type: String },
        extensionAttribute6: { type: String },
        employeeNumber: { type: String },

        // Поля АС ВХД
        PERSONALID: { type: String },
        // то же самое, что employeeNumber
        ID: { type: String },
        STARTDATE: {type: Date},
        BirthDayDate: {type: Date},
    })),
    name: "userData",
};

export = UserDataService;
