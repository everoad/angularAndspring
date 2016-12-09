package com.angular.spring;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("api")
public class TestController {

	
	
	@RequestMapping(method=RequestMethod.GET, value="test")
	public String test() {
		return "index";
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public @ResponseBody Map<String, String> String() {
		Map<String, String> map = new HashMap<>();
		map.put("name", "everoad");
		map.put("age", "30");
		return map;
	}
	
	@RequestMapping(method=RequestMethod.POST, value="board", consumes="application/json")
	public @ResponseBody Map<String, String> getList(@RequestBody Map<String, String> map) {
		map.keySet().stream().forEach(key -> { System.out.println(map.get(key));} );
		return map;
	}
	
} 
