<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit44edef7969736d9155386816cec3d8f8
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $prefixesPsr0 = array (
        'B' => 
        array (
            'Bramus' => 
            array (
                0 => __DIR__ . '/..' . '/bramus/router/src',
            ),
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit44edef7969736d9155386816cec3d8f8::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit44edef7969736d9155386816cec3d8f8::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInit44edef7969736d9155386816cec3d8f8::$prefixesPsr0;
            $loader->classMap = ComposerStaticInit44edef7969736d9155386816cec3d8f8::$classMap;

        }, null, ClassLoader::class);
    }
}
