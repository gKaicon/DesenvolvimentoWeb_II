<?php

require "../vendor/autoload.php";

use Monolog\Level;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

class Log
{
    private static $log = null;
    private static $logFile = '../logs.log';


    private static function init(string $logger = 'system')
    {
        self::$log = new Logger($logger);
        self::$log->pushHandler(new StreamHandler(self::$logFile, Level::Debug));
    }

    public static function addLog($message, $level = Level::Debug)
    {
        if (is_null(self::$log)) {
            self::init(); //tomar cuidado quando precisar de uma config diferente
        }

        switch ($level) {
            case Level::Debug:
                self::$log->info($message);
                break;
            case Level::Info:
                self::$log->info($message);
                break;
            case Level::Notice:
                self::$log->notice($message);
                break;
            case Level::Warning:
                self::$log->warning($message);
                break;
            case Level::Error:
                self::$log->error($message);
                break;
            case Level::Critical:
                self::$log->critical($message);
                break;
            case Level::Alert:
                self::$log->alert($message);
                break;
            case Level::Emergency:
                self::$log->emergency($message);
                break;
        }
    }
}