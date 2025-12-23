# Node LTS 이미지
FROM node:20

# 컨테이너 내부 작업 디렉토리
WORKDIR /app

# 패키지 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 복사
COPY . .

# 포트 노출
EXPOSE 3000

# 서버 실행
CMD ["npm", "run", "dev"]
