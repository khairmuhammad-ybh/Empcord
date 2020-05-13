module.exports = {
    DS_DEV : {
        url: "mongodb://localhost:27017/empc-db"
    },
    DS_AWS : {
        url: "mongodb://empcDbMaster:empcDbMaster@ec2-18-139-3-23.ap-southeast-1.compute.amazonaws.com:27017/empc-db?authSource=admin"
    }
}