const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../model/db');
const User = require('../model/userModel');


// 회원가입
router.post('/signup', async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: '이메일과 비밀번호를 모두 입력해주세요' });

    try {

        const existingUser = await User.findUserByEmail(email);
        if(existingUser) return res.status(409).json({ message: '이미 가입내역이 존재합니다.' });

        const hashed = await bcrypt.hash(password, 10);
        const userId = await User.createUser(email,hashed);

        res.status(201).json({ message: '회원가입 완료!' });
    } catch (err) {
        console.error('❌ DB/회원가입 에러:', err);
        res.status(500).json({ message: '서버 에러' });
    }

});

// 로그인
    router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: '이메일과 비밀번호를 확인해주세요!' });

    try {
        const user = await User.findUserByEmail(email);
        if(!user) return res.status(401).json({ message: '가입되지 않은 이메일입니다.' });

        const match = await bcrypt.compare(password, rows[0].password);
        if (!match) return res.status(401).json({ message: '비밀번호 잘못되었습니다.' });

        res.json({ message: '로그인 성공!' });
    } catch (err) {
        res.status(500).json({ message: '서버 에러' });
    }
});

module.exports = router;
