PGDMP     4    /                w           FEC    10.6     11.2 (Ubuntu 11.2-1.pgdg18.04+1)     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                       false            �           1262    16400    FEC    DATABASE     w   CREATE DATABASE "FEC" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
    DROP DATABASE "FEC";
             ryden    false            �            1259    16438    products    TABLE     �   CREATE TABLE public.products (
    id integer NOT NULL,
    productname character varying(255),
    productpic character varying(255),
    productprice numeric,
    producttype character varying(255)
);
    DROP TABLE public.products;
       public         ryden    false            P           2606    16445    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public         ryden    false    196           