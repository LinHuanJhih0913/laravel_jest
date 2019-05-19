Laravel + Jest - 自己 api 自己測
===

## 安裝 Laravel 專案

### clone 專案
`git clone https://github.com/LinHuanJhih0913/laravel_jest.git`

### 移至專案目錄
`cd laravel_jest`

### 複製 .env
`cp .env.example .env`

### 修改 db 資訊
`vim .env`
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_DATABASE=<database_name>
DB_USERNAME=<database_user>
DB_PASSWORD=<database_user_password>
```

### 安裝 Laravel 必要的套件
`composer install`

### 產生新的 Laravel 應用程式金鑰
`php artisan key:generate`

### (自定義指令) 建立 MySQL 資料庫
`php artisan mysql:create`

### 建立資料表，並且建立 seed
`php artisan migrate --seed`

## 安裝 Jest

### 移至 api_test
`cd laravel_jest/api_test/`

### 安裝 Jest 必要的套件
`npm install`

### 測試
`npm test`
```
 FAIL  __test__/user.test.js
  ✓ fetch api/users/1 schema (73ms)
  ✕ fetch api/users/1 snapshot (17ms)
  ✓ fetch api/users schema (21ms)
  ✕ fetch api/users snapshot (13ms)

...

Test Suites: 1 failed, 1 total
Tests:       2 failed, 2 passed, 4 total
Snapshots:   2 failed, 2 total
Time:        0.764s, estimated 2s
```
> 可以看到 snapshot 錯誤，schema 正確，原因是因為 `laravel_jest/api_test/__test__/__snapshots__/user.test.js.snap` 記錄著之前的 snapshot 而非現在的 snapshot，可以將它 rm 並重新 `npm test`

> snapshot 要正確的話，必須要與 expect 一模一樣才會通過測試
