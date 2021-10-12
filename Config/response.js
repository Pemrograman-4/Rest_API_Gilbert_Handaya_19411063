module.exports = {
    errorResponse: (msg) => {
        return {
            status: false,
            message: msg
        }
    },
    suksesResponse: (msg) => {
        return {
            status: true,
            message: msg
        }
    },
    suksesResponse: (data) => {
        return {
            sukses: true,
            msg: 'Berhasil Mendapatkan Data',
            result: data
        }
    },
    nullResult: () => {
        return {
            sukses: false,
            msg: 'Tidak Ada Data',
            result: null
        }
    },
    errorResult: () => {
        return {
            sukses: false,
            msg: 'Gagal Mendapatkan Data',
            data: null
        }
    }
}