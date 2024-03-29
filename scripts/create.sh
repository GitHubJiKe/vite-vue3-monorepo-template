#!/usr/bin/env sh

# 询问用户输入工程名称
read -p "请输入想要创建的工程名称: " project_name

# 检查输入是否为空
if [[ -z "$project_name" ]]; then
  echo "工程名称不能为空，请重新运行脚本并输入有效名称。"
  exit 1
fi

# 进入packages文件夹
if [[ ! -d "packages" ]]; then
  echo "未找到packages文件夹，正在创建..."
  mkdir packages
fi
cd packages

# 执行pnpm create命令创建新的Vite工程
pnpm create vite@latest "$project_name"

echo "工程 '$project_name' 创建成功。"
