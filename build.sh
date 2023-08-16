#!/bin/bash
mkdir "build/markets"
mkdir "build/dashboard"
mkdir "build/loop"
mkdir "build/deposit"
mkdir "build/borrow"
mkdir "build/manage-uwu"
mkdir "build/reserve-overview"

cp -R "build/img" "build/markets"
cp -R "build/img" "build/dashboard"
cp -R "build/img" "build/loop"
cp -R "build/img" "build/deposit"
cp -R "build/img" "build/borrow"
cp -R "build/img" "build/manage-uwu"
cp -R "build/img" "build/reserve-overview"

cp -R "build/fonts" "build/markets"
cp -R "build/fonts" "build/dashboard"
cp -R "build/fonts" "build/loop"
cp -R "build/fonts" "build/deposit"
cp -R "build/fonts" "build/borrow"
cp -R "build/fonts" "build/manage-uwu"
cp -R "build/fonts" "build/reserve-overview"

cp -R "build/css" "build/markets"
cp -R "build/css" "build/dashboard"
cp -R "build/css" "build/loop"
cp -R "build/css" "build/deposit"
cp -R "build/css" "build/borrow"
cp -R "build/css" "build/manage-uwu"
cp -R "build/css" "build/reserve-overview"

cp -R "build/static" "build/markets"
cp -R "build/static" "build/dashboard"
cp -R "build/static" "build/loop"
cp -R "build/static" "build/deposit"
cp -R "build/static" "build/borrow"
cp -R "build/static" "build/manage-uwu"
cp -R "build/static" "build/reserve-overview"

cd "build" && tar -czf "build.tar.gz" .