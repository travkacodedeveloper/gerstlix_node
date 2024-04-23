const axios = require("axios");

const acceptServers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,101,102,103,201,202,203,204,205,206,207]
const acceptServersArz = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]
const acceptProject = ['arz', 'marz','rrp']

class Gerstlix {
    constructor(options) { this.token = options.token; }

    async getInfo(server) {
        if (server && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getInfo/?token=${this.token}&server=${server}`)
        } else { return {success: false, data: `Сервер: ${server} не находится в одобренном списке`}}
    }

    async getGhettoMap(server) {
        if (server && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/game.getGhettoMap/?token=${this.token}&server=${server}`)
        } else { return {success: false, data: `Сервер: ${server} не находится в одобренном списке`}}
    }

    async getMembers(server, fractionId) {
        if (server && fractionId && acceptServersArz) {
            return axios.get(`https://api2.gerstlix.com/v1/game.getMembers/?token=${this.token}&server=${server}&fraction=${fractionId}`)
        } else { return {success: false, data: `Проверьте serverID и fractionID на валидность`}}
    }

    async getOldPlayers(server) {
        if (server && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/game.getOldPlayers/?token=${this.token}&server=${server}`)
        } else { return {success: false, data: `Сервер: ${server} не находится в одобренном списке`}}
    }

    async getRichPlayers(server) {
        if (server && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/game.getRichPlayers/?token=${this.token}&server=${server}`)
        } else { return {success: false, data: `Сервер: ${server} не находится в одобренном списке`}}
    }

    async getDeputy(server, fractionId) {
        if (server &&  fractionId && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getDeputy/?token=${this.token}&server=${server}&fraction=${fractionId}`)
        } else { return {success: false, data: `Проверьте serverID и fractionID на валидность`}}
    }

    async getDeputyList(server) {
        if (server && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getDeputyList/?token=${this.token}&server=${server}`)
        } else { return {success: false, data: `Сервер: ${server} не находится в одобренном списке`}}
    }

    async getLeader(server, fractionId) {
        if (server && fractionId && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getLeader/?token=${this.token}&server=${server}&fraction=${fractionId}`)
        } else { return {success: false, data: "Проверьте serverID и fractionID на валидность"}}
    }

    async getLeadersList(server) {
        if (server && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getLeadersList/?token=${this.token}&server=${server}`)
        } else { return {success: false, data: `[getLeadersList] Сервер: ${server} не находится в одобренном списке`}}
    }

    async getMinister(server, fractionId) {
        if (server && fractionId && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getMinister/?token=${this.token}&server=${server}&fraction=${fractionId}`)
        } else { return {success: false,data: "[getMinister] Проверьте serverID и fractionID на валидность"}}
    }

    async getMinistersList(server) {
        if (server && acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getMinistersList/?token=${this.token}&server=${server}`)
        } else { return {success: false,data: "[getMinistersList] Укажите валидные параметры!"}}
    }

    async getRecordFraction(server, fractionId) {
        if (server && fractionId && acceptServers.includes(server)) {
            return await axios.get(`https://api2.gerstlix.com/v1/server.getRecord/?token=${this.token}&server=${server}&fraction=${fractionId}`);
        } else {return { success: false,data: "[getRecordFraction] Укажите валидные параметры!" };}
    }

    async getRecords(server) {
        if (acceptServers.includes(server)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getRecords/?token=${this.token}&server=${server}`)
        } else { return { success: false,data: `Сервер ${server} не находится в списке одобренных:\n${acceptServers}` } }
    }

    async getStatus(gameProject) {
        if (acceptProject.includes(gameProject)) {
            return axios.get(`https://api2.gerstlix.com/v1/server.getStatus/?token=${this.token}`)
        } else { return { success: false,data: `Укажите один из проектов: ${acceptProject}` } }
    }

    async getPlayer(server, player) {
        if (server && player){
            if (typeof server === 'number' && typeof player === 'string') {
                return axios.get(`https://api2.gerstlix.com/v1/game.getPlayer/?token=${this.token}&server=${server}&player=${player}`)
            } else { console.log(`Укажите верный тип данных`) }
        } else { return {success: false, data: `Укажите параметры к методу`} }
    }

    async getAdminsList(server) {
        if (server) {
            if (typeof server === "number") {
                return axios.get(`https://api2.gerstlix.com/v1/server.getAdminsList/?token=${this.token}&server=${server}`)
            }
        } else { return {success: false, data: `Укажите параметры к методу`} }
    }

    async geoIp(ip) {
        if (ip) {
            return axios.get(`https://api2.gerstlix.com/v1/utils.geoIp/?token=${this.token}&ip=${ip}`)
        } else { return {success: false, data:"Укажите IP!"}}
    }
};

    // async getStatusCustom(gameProject) {
    //     if (acceptProject.includes(gameProject)) {
    //         const r = await axios.get(`https://api2.gerstlix.com/v1/server.getStatus/?token=${this.token}`);
    //         if (r.data.success) {
    //             if (gameProject === "arz") { return r.data.data["Arizona RP"] }
    //             if (gameProject === "marz") { return r.data.data['Arizona Mobile'] }
    //             if (gameProject === "rrp") { return r.data.data['Rodina RP'] }
    //         }
    //     } else {
    //         console.log(`Укажите один из проектов: ${acceptProject}`);
    //     }
    // }

module.exports = Gerstlix