#!/usr/bin/env sh

PS3='请输入工作空间:'
select workspace in  packages shared
do
    cd $workspace
    PS3='请输入子项目编号:'
    projects=$(ls -d *)
    select project in  $projects
    do
        if [ ! $project ]; then
            echo "\033[31m 子项目不存在!\033[0m"
            exit 0
        fi
        echo "你执行的子项目是 $project"
        pkg_name=`node -p "require('./"$project"/package.json').name"`
        cd $pkg_name && pnpm run $1
        break
    done
    break
done