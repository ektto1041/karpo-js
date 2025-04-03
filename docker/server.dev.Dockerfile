FROM node:20-alpine

# pnpm 설치
RUN npm install -g pnpm

# 작업 디렉토리 설정 (루트 기준)
WORKDIR /app

# 모든 파일 복사
COPY . .

# 워크스페이스 설치 (루트에서)
RUN pnpm install
