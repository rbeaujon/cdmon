<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\DB;
use App\Models\Categoria;
use App\Models\BannerSlider;
use App\Models\Articulo;
use App\Models\Blog;
use App\Models\Marca;
use App\Models\AtributoArticulo;
use App\Models\ArticuloTarifa;

class IndexController extends Controller
{
	public function __construct()
	{
		parent::__construct();
	}

    public function index()
    {            
    	return view('index');
	}
    
}
