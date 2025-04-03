# --- 1단계: 빌드 스테이지 ---
  FROM node:20-alpine AS builder

  RUN npm install -g pnpm
  
  WORKDIR /app
  
  # 의존성 설치를 위한 최소 복사
  COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
  COPY apps/server/package.json ./apps/server/
  COPY packages/eslint-config/package.json ./packages/eslint-config/
  COPY packages/typescript-config/package.json ./packages/typescript-config/
  
  # 전체 의존성 설치 (dev 포함)
  RUN pnpm install
  
  # 소스 복사
  COPY apps/server ./apps/server
  COPY packages/eslint-config ./packages/eslint-config
  COPY packages/typescript-config ./packages/typescript-config
  
  # 빌드 실행 (Nest.js build → dist/)
  RUN pnpm --filter server build
  
  # --- 2단계: 런타임 스테이지 ---
  FROM node:20-alpine
  
  RUN npm install -g pnpm
  
  WORKDIR /app
  
  # 런타임 의존성 설치를 위한 복사
  COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
  COPY apps/server/package.json ./apps/server/
  COPY packages/eslint-config/package.json ./packages/eslint-config/
  COPY packages/typescript-config/package.json ./packages/typescript-config/
  RUN pnpm install --prod
  
  # 빌드된 결과 복사
  COPY --from=builder /app/apps/server/dist ./apps/server/dist
  