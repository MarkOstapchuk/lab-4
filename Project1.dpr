﻿program Project1;
uses
  System.SysUtils, Windows;

var N, i, j,k,temp:integer ;
arr:array[1..10] of integer ;
p:array[1..10] of integer;
begin
	  SetConsoleCP(1251);
      SetConsoleOutputCP(1251);
      writeln('Введите число элементов массива: ') ;
      readln(N);
      for k:=1 to N do
      begin
      	writeln('Введите ', k, ' элемент');
        readln(arr[k]);
        p[k]:=k;
      end;
      for k := 1 to N do
          begin
            write(arr[k], ' ');
          end;
      writeln;
      i:=2;
      while i<=N do
      begin
          p[i]:=p[i]-1;
          //вычисление элемента с которым переставляется
          if (i mod 2 = 1) then
          j:=1 else
          j:=p[i];
          temp:=arr[i];
          arr[i]:=arr[j];
          arr[j]:=temp;
          for k := 1 to N do
          begin
            write(arr[k], ' ');
          end;
          writeln;
          i:=2;
          while p[i] = 1 do
          begin
            p[i]:=i;
            i:=i+1 ;
          end;
      end;

      readln;
end.
