const db = require('../model/db');  // 기존 db 연결

const User = {
  // 회원가입용 함수
  async createUser(email, hashedPassword) {
    const [result] = await db.execute(
      'INSERT INTO users (email, password) VALUES (?, ?)',
      [email, hashedPassword]
    );
    return result.insertId;  // 방금 생성된 user id 반환
  },

  // 이메일로 사용자 조회
  async findUserByEmail(email) {
    const [rows] = await db.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0] || null;
  }
};

module.exports = User;
